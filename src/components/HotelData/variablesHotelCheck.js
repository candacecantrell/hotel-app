import React from 'react';
import {mdiCheck} from '@mdi/js';
import Icon from '@mdi/react'

export const CheckMark = (props) => (
    <Icon path={mdiCheck}
                className={props.checkClass}
                size={1}
                /> 

    );