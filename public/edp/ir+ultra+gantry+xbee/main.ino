int pin = 4;
int count = 0;
unsigned long value = 0;
const int trigPin = 13;
const int echoPin = 12;
long duration;
int distance;
int l, r;

void forward() {
  // Move forward with moderate speed.
  digitalWrite(5, HIGH);
  digitalWrite(6, HIGH);
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
}
void left() {
  digitalWrite(5, HIGH);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
}
void right() {
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
}
void Stop() {
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
}
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(pin, INPUT);
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
}
long st = millis(), endt;

int flag = 0;

void loop() {
  if (flag == 0){
    if (Serial.available() > 0){
      char s = Serial.read();
      if (s == 'y'){
        flag = 1;
      }
    }
  }
  if (flag == 1) {
    if (digitalRead(pin) > 0) { // This is for gantry crossing detection
      value = pulseIn(pin, HIGH);
      Serial.print("Value:");
      Serial.println(value);
      
      // Gantry crossing detection
      if (value > 1500 && value < 2000) {
        Serial.println("gantry 1 crossed:");
        Stop();
        delay(1000);
      }
      if (value > 2500 && value < 3000) {
        Serial.println("gantry 2 crossed:");
        Stop();
        delay(1000);
      }
      if (value > 500 && value < 1000) {
        Serial.println("gantry 3 crossed:");
        Stop();
        delay(1000);
      }
      flag = 1;
      // Read left and right sensors
      l = digitalRead(A0);
      r = digitalRead(A1);
      // Measure distance using ultrasonic sensor

      digitalWrite(trigPin, LOW);
      delayMicroseconds(2);
      digitalWrite(trigPin, HIGH);
      delayMicroseconds(10);
      digitalWrite(trigPin, LOW);
      duration = pulseIn(echoPin, HIGH);
      distance = (duration * 0.0343) / 2;

      // Check if object is within 15 cm
      if (distance <= 20) {
        Serial.println("Object detected, stopping.");
        Stop();
        delay(5000);
      } else {
        // Robot movement based on sensor inputs
        if (l == 1 && r == 1) {
          forward();
        }
        // Handle left turn when left sensor is 0
        else if (l == 0 && r == 1) {
          left();
        }
        // Handle right turn when right sensor is 0
        else if (l == 1 && r == 0) {
          right();
        }
        // When both sensors are 0, keep moving forward but gently turn if necessary
        else if (l == 0 && r == 0) {
          endt = millis();
          if (endt - st > 1000) {
            count++;
            st = millis();
          }
          // Movement based on count
          if (count == 1) {
            forward();
            Serial.print("forward: ");
            Serial.println(count);
            delay(200);
          }
          if (count == 2) {
            left();
            Serial.print("left: ");
            Serial.println(count);
            delay(200);
          }
          if (count == 3) {
            forward();
            Serial.print("forward: ");
            Serial.println(count);
            delay(200);
          }
          if (count == 4) {
            forward();
            Serial.print("forward: ");
            Serial.println(count);
            delay(200);
          }
          if (count == 5) {
            left();
            Serial.print("left: ");
            Serial.println(count);
            delay(200);
          }
          if (count == 6) {
            forward();
            Serial.print("forward: ");
            Serial.println(count);
            delay(200);
          }
          if (count > 6) {
            Stop();
            Serial.print("stop: ");
            flag = 0;
          }
        }
      }
    }
  }
}
