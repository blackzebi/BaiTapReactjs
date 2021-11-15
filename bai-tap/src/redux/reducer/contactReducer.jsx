const initialState = [];

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            state = [...state, action.payload];
            return state;
        case "DELETE_EMPLOYEE_LIST":
            const found = state.filter((contact) => {
                const a = action.payload.length;
                if (a > 0) {
                    if (contact.key === action.payload[0]) {
                        action.payload.shift()
                        return contact = null;
                    }
                }
                return contact;
            })
            state = found;
            return state;
        case "DELETE_EMPLOYEE":
            const contactFilter = state.filter((contact) =>
                contact.key === action.payload ? null : contact
            );
            state = contactFilter;
            return state;

        case "EDIT_EMPLOYEE":
            const contactUpdate = state.filter((contact) =>
                contact.stt === action.payload.stt
                    ? Object.assign(contact, action.payload)
                    : contact
            );
            state = contactUpdate;
            return state;
        default:
            return state;
    }
}