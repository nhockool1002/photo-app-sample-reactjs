import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Formik, Form, FastField } from 'formik';
import {
    Container,
    Button,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../constant/global';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
        category: null
    }
    return (
        <div className="photo-form">
            <br />
            <Formik initialValues={initialValues}>
                {formikProps => {
                    const { values, errors, touched } = formikProps;
                    console.log({ values, errors, touched });
                    return (
                        <Container>
                            <Form>
                                <FastField
                                    name="title"
                                    component={InputField}
                                    label="Title"
                                    placeholder="Ex: This is my memories .."
                                >
                                </FastField>

                                <FastField
                                    name="category"
                                    component={SelectField}
                                    label="Category"
                                    placeholder="Ex: Choose photo for your photo .."
                                    options={PHOTO_CATEGORY_OPTIONS}
                                >
                                </FastField>

                                <FastField
                                    name="photo"
                                    component={RandomPhotoField}
                                    label="photo"
                                >
                                </FastField>

                                <FormGroup>
                                    <Button color='primary'>Add to Album >></Button>
                                </FormGroup>
                            </Form>
                        </Container>
                    )
                }}
            </Formik>
        </div>
    );
}

export default PhotoForm;