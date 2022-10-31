import { createStore } from "redux";
const defaultValue = {
  items: [],
  idCount: 0,
};
const storeReducer = (state = defaultValue, action) => {
  let updatedQuotes = [];
  let idCounter = state.idCount;
  if (action.type === "add") {
    const existingItemIndex = state.items.findIndex(
      (i) => i.quoteLine == action.item.quoteLine
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItemIndex >= 0) {
      return state;
    } else {
      const updatedItem = { ...action.item, id: idCounter + 1 };
      updatedQuotes = [...state.items, updatedItem];

      return {
        items: updatedQuotes,
        idCount: idCounter + 1,
      };
    }
  }
  if (action.type === "remove") {
    updatedQuotes = state.items.filter((item) => {
      return action.item.id != item.id;
    });

    return {
      items: updatedQuotes,
      idCount: idCounter - 1,
    };
  }
  return state;
};

export const store = createStore(storeReducer);
