/*
 * Influx API Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.influxdb.client.domain;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * TelegrafPluginInputProcstatConfig
 */

public class TelegrafPluginInputProcstatConfig {
  public static final String SERIALIZED_NAME_EXE = "exe";
  @SerializedName(SERIALIZED_NAME_EXE)
  private String exe;

  public TelegrafPluginInputProcstatConfig exe(String exe) {
    this.exe = exe;
    return this;
  }

   /**
   * Get exe
   * @return exe
  **/
  @ApiModelProperty(value = "")
  public String getExe() {
    return exe;
  }

  public void setExe(String exe) {
    this.exe = exe;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TelegrafPluginInputProcstatConfig telegrafPluginInputProcstatConfig = (TelegrafPluginInputProcstatConfig) o;
    return Objects.equals(this.exe, telegrafPluginInputProcstatConfig.exe);
  }

  @Override
  public int hashCode() {
    return Objects.hash(exe);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TelegrafPluginInputProcstatConfig {\n");
    sb.append("    exe: ").append(toIndentedString(exe)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
