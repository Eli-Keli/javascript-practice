//* Message Store
// Manages messages for user notifications. This includes setting success and error messages based on different actions.
import { create } from "zustand";

const useMessageStore = create((set) => ({
    message: "",
    messageType: "", // 'success' or 'error'
    setMessage: (message, type = "success") =>
        set({ message, messageType: type }),
    clearMessage: () => set({ message: "", messageType: "" }),
}));

export default useMessageStore;


//* Role of useMessageStore
/*
1. Separation of Concerns when handling error, it might be an error when a fetch fails or unexpected input is inserted.
2. Centralized Message Management for handling messages both success and error messages
3. Simplifies Debugging and Maintenance
*/