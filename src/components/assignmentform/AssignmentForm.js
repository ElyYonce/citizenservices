import React, { Component } from "react";
import {
    Header,
    Checkbox,
    Form,
    Grid,
    Divider,
    Table,
    Button,
    Icon,
    Popup,
    Segment,
    Label,
    Radio
  } from "semantic-ui-react";
  import { SingleDatePicker } from "react-dates";
  import { ReferenceHelper } from "../../services/ReferenceHelper";
  import {
    fieldTypes,
    sourceTypes,
    layoutTypes,
    gridTypes,
    pageNames,
    actionNames,
    iconSources,
    standardIcons
  } from "../../services/constants";