import React from "react";
import { StyleSheet, Button, View, TextInput} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup"

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number 1 - 5',(value)=> parseInt(value) < 6 && parseInt(value) > 0
    )
})

const ReviewForm = (props) => {
  return (
    <View style={globalStyles.container}>
     
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          props.onSubmit(values);
          actions.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multipline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review 1-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button title='submit' color='maroon' onPress={props.handleSubmit} />
          </View>
     
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({

});