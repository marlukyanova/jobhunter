# jobhunter

Tech Stack:

BackEnd: Koa + Postgres

Run Postgres Server and run following queris to create database and tables:
CREATE DATABASE JobHunter;
CREATE TABLE jobapp (
  id serial NOT NULL,
  position VARCHAR(100) NOT NULL,
  company VARCHAR(50) NOT NULL,
  description text,
  state VARCHAR(50) NOT NULL,
  stage VARCHAR(50) NOT NULL,
  source VARCHAR(50),
  addinfo text,
  closedreason text,
  createdat text NOT NULL,
  appliedat text NOT NULL,
  closedat text,
  PRIMARY KEY("id")
);
CREATE TABLE jobstage (
  id serial PRIMARY_KEY,
  createdat text NOT NULL,
  type VARCHAR(50) NOT NULL,
  date text,
  addinfo text,
  jobappid INT NOT NULL,
  PRIMARY KEY ("id"),
    CONSTRAINT "jobappid_k" FOREIGN KEY ("jobappid") REFERENCES "public"."jobapp"("id")
);

FrontEnd: Angular, Angular Material
Install Angular: npm install -g @angular/cli
Install Angular Material in client app folder: ng add @angular/material
with following settings: 
- prebuilt theme name: deeppurple-amber.css
- global Angular Material typography styles: yes
- BrowserAnimationModules: no
