/*
 * InfluxDB OSS API Service
 * The InfluxDB v2 API provides a programmatic interface for all interactions with InfluxDB. Access the InfluxDB API using the `/api/v2/` endpoint. 
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.influxdb.client.domain;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets TemplateKind
 */
@JsonAdapter(TemplateKind.Adapter.class)
public enum TemplateKind {
  
  BUCKET("Bucket"),
  
  CHECK("Check"),
  
  CHECKDEADMAN("CheckDeadman"),
  
  CHECKTHRESHOLD("CheckThreshold"),
  
  DASHBOARD("Dashboard"),
  
  LABEL("Label"),
  
  NOTIFICATIONENDPOINT("NotificationEndpoint"),
  
  NOTIFICATIONENDPOINTHTTP("NotificationEndpointHTTP"),
  
  NOTIFICATIONENDPOINTPAGERDUTY("NotificationEndpointPagerDuty"),
  
  NOTIFICATIONENDPOINTSLACK("NotificationEndpointSlack"),
  
  NOTIFICATIONRULE("NotificationRule"),
  
  TASK("Task"),
  
  TELEGRAF("Telegraf"),
  
  VARIABLE("Variable");

  private String value;

  TemplateKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static TemplateKind fromValue(String text) {
    for (TemplateKind b : TemplateKind.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<TemplateKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final TemplateKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public TemplateKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return TemplateKind.fromValue(String.valueOf(value));
    }
  }
}
