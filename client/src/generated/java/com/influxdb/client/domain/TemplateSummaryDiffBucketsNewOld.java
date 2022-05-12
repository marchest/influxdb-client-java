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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.influxdb.client.domain.BucketRetentionRules;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * TemplateSummaryDiffBucketsNewOld
 */

public class TemplateSummaryDiffBucketsNewOld {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_RETENTION_RULES = "retentionRules";
  @SerializedName(SERIALIZED_NAME_RETENTION_RULES)
  private List<BucketRetentionRules> retentionRules = new ArrayList<>();

  public TemplateSummaryDiffBucketsNewOld name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public TemplateSummaryDiffBucketsNewOld description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public TemplateSummaryDiffBucketsNewOld retentionRules(List<BucketRetentionRules> retentionRules) {
    this.retentionRules = retentionRules;
    return this;
  }

  public TemplateSummaryDiffBucketsNewOld addRetentionRulesItem(BucketRetentionRules retentionRulesItem) {
    if (this.retentionRules == null) {
      this.retentionRules = new ArrayList<>();
    }
    this.retentionRules.add(retentionRulesItem);
    return this;
  }

   /**
   * Rules to expire or retain data.  No rules means data never expires.
   * @return retentionRules
  **/
  public List<BucketRetentionRules> getRetentionRules() {
    return retentionRules;
  }

  public void setRetentionRules(List<BucketRetentionRules> retentionRules) {
    this.retentionRules = retentionRules;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TemplateSummaryDiffBucketsNewOld templateSummaryDiffBucketsNewOld = (TemplateSummaryDiffBucketsNewOld) o;
    return Objects.equals(this.name, templateSummaryDiffBucketsNewOld.name) &&
        Objects.equals(this.description, templateSummaryDiffBucketsNewOld.description) &&
        Objects.equals(this.retentionRules, templateSummaryDiffBucketsNewOld.retentionRules);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, retentionRules);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TemplateSummaryDiffBucketsNewOld {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    retentionRules: ").append(toIndentedString(retentionRules)).append("\n");
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
