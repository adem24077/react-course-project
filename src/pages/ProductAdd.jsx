import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormField } from "semantic-ui-react";
import KodlamaIoTextInput from "../utiliies/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 0 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="productName" placeholder="Ürün adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyat" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
