import {UPDATE_FORM} from "./constants/formConstants";

export const updateForm = input => ({
    type: UPDATE_FORM,
    key: input.name,
    value: input.value
});