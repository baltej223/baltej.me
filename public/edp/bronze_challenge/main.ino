
unsigned long value = 0;
int pin = 4; // Gantry sensor pin (with Schottky diode)
int count = 0, l, r;
int flag = 0;
long st = millis(), endt;
int trigPin = 13;
int echoPin = 12; 

void setup() {
  Serial.begin(9600);

  pinMode(A0, INPUT); // Left IR sensor
  pinMode(A1, INPUT); // Right IR sensor
  pinMode(pin, INPUT); // Gantry IR input
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(5, OUTPUT); // Left motor forward
  pinMode(6, OUTPUT); // Left motor reverse
  pinMode(8, OUTPUT); // Right motor forward
  pinMode(7, OUTPUT); // Right motor reverse
}

void forward() {
  digitalWrite(5, HIGH);
  digitalWrite(6, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(7, LOW);
}

void left() {
  digitalWrite(5, HIGH);
  digitalWrite(6, LOW);
  digitalWrite(8, LOW);
  digitalWrite(7, LOW);
}

void right() {
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(7, LOW);
}

void stopMotors() {
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalWrite(8, LOW);
  digitalWrite(7, LOW);
}

int getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH, 20000); // 20ms timeout
  int distance = duration * 0.0343 / 2;
  return distance;
}

void loop() {
  if (Serial.available() > 0 && Serial.read() == 'y') {
    flag = 1;
  }

  if (flag == 1) {
    // Gantry detection
    int value = digitalRead(pin);
    if (value == HIGH) {
      Serial.println("Gantry PASS");
      stopMotors();
      delay(1000);
    }

    // Obstacle detection
    int distance = getDistance();
    if (distance > 0 && distance <= 20) {
      Serial.print("Obstacle detected at ");
      Serial.print(distance);
      Serial.println(" cm. Stopping.");
      stopMotors();
      delay(2000);
      return; // Skip rest of loop this cycle
    }

    // IR line following
    l = digitalRead(A0);
    r = digitalRead(A1);

    if (l == 1 && r == 1) forward();
    else if (l == 0 && r == 1) left();
    else if (l == 1 && r == 0) right();
    else if (l == 0 && r == 0) {
      endt = millis();
      if (endt - st > 1000) {
        count++;
        st = millis();
      }

      switch (count) {
        case 1:
        case 3:
        case 4:
        case 6:
          Serial.print("Forward: ");
          Serial.println(count);
          forward();
          break;

        case 2:
          Serial.print("Left Turn: ");
          Serial.println(count);
          left();
          delay(500);
          break;

        case 5:
          Serial.print("Left Turn: ");
          Serial.println(count);
          left();
          delay(300);
          break;

        default:
          stopMotors();
          Serial.println("Stopped");
          flag = 0;
          break;
      }
    }
  }
}
