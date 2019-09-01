#include <Arduino.h>
#include <pins_arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Wire.h>
//#### Screen SETUP ######
#include "SPI.h"
#include <TFT_eSPI.h>
#define BACKLIGHT_CHANNEL   ((uint8_t)1)
#define TFT_BL              12
TFT_eSPI tft = TFT_eSPI();   // Invoke library
//########################
#include "DHTesp.h"

DHTesp dhtSensor1;



void setup()
{
  // Wire.begin(TOUCH_SDA, TOUCH_SCL);
  // Wire1.begin(SENSOR_SDA, SENSOR_SCL);
  SPI.begin(TFT_SCLK, TFT_MISO, TFT_MOSI, -1); 

  ledcAttachPin(TFT_BL, 1);
  ledcSetup(BACKLIGHT_CHANNEL, 12000, 8);
  ledcWrite(BACKLIGHT_CHANNEL, 255);

  tft.init();
  tft.fillScreen(0xFFFF);
  tft.setRotation(0);
  tft.setTextSize(1);
  tft.setSwapBytes(true);

  
  Serial.begin(115200);

  
  
  dhtSensor1.setup(21,DHTesp::DHT11);
  tft.fillScreen(0x0);

}
void loop()
{
      tft.setTextSize(2);
    tft.setCursor(0, 10);
    tft.setTextColor(0xffff);
    tft.println(String(((String("Temp: ")+String(dhtSensor1.getTemperature())))));
    tft.setTextSize(2);
    tft.setCursor(0, 30);
    tft.setTextColor(0xffff);
    tft.println(String(((String("Humid: ")+String(dhtSensor1.getHumidity())))));
    delay(1000);
  tft.fillScreen(0x0);

  
}
