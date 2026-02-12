int ir1 = A0;
int ir2 = A1;

int trigpin = 13;
int echopin = 12;
int l,r;

long duration;
int distance;

void setup(){
  pinMode(ir1, INPUT);
  pinMode(ir2, INPUT);

  pinMode(trigpin, OUTPUT);
  pinMode(echopin, INPUT);

  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
}

void forward() {
digitalWrite(5, HIGH);
digitalWrite(6, LOW);
digitalWrite(7, LOW);
digitalWrite(8, HIGH);
}

void left() {
digitalWrite(5, HIGH);
digitalWrite(6, LOW);
digitalWrite(7, LOW);
digitalWrite(8, LOW);
}

void right() {
digitalWrite(5, LOW);
digitalWrite(6, LOW);
digitalWrite(7, LOW);
digitalWrite(8, HIGH);
}

 void backward() {
 digitalWrite(5, LOW);
 digitalWrite(6, HIGH);
 digitalWrite(7, HIGH);
 digitalWrite(8, LOW);
 }


void stop() {
digitalWrite(5, LOW);
digitalWrite(6, LOW);
digitalWrite(7, LOW);
digitalWrite(8, LOW);
}


void loop(){
  digitalWrite(trigpin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigpin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigpin, LOW);

  duration = pulseIn(echopin, HIGH);
  distance = duration * 0.034 / 2;

    r=digitalRead(ir1);
    l=digitalRead(ir2);

  if (distance > 0 && distance < 20){
    stop();
  }
  else{

    if (l==1 && r==1)
    forward();
    if(r==1 && l==0)
    left();
    if(l==1 && r==0)
    right();
    if(l==0 && r==0) { 
      forward();
    }
  }
}
