export const validateStates = (state1, state2, updateState1, updateState2) => {
  if (state1.length >= 1) {
    if (state2.length >= 1) {
      if (JSON.stringify(state1) !== JSON.stringify(state2)) {
        updateState1(state2);
      }
    } else {
      updateState2(state1);
    }
  }
};
