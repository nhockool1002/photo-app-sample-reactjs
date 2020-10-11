import React from 'react';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../../../components/PhotoForm';

function AddEdit(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick new Photos now!"/>
            
            <div className="photo-edit__form">
                <PhotoForm onSubmit={() => console.log('aaa')} />
            </div>
        </div>
    );
}

export default AddEdit;