// import { useState } from 'react';
// import useLocalStorage from './useLocalStorage';

// const useDarkMode = () => {
//     const [darkMode, setDarkMode] = useState("darkMode", initalValue);
//     return [darkMode, setDarkMode];
// };

// export default useDarkMode;

import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
    return [darkMode, setDarkMode];
};

export default useDarkMode;