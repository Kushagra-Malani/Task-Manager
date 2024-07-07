import React from 'react';
import { useTodo } from '../context';

export default function ThemeBtn() {

    const {themeMode, lightTheme, darkTheme} = useTodo()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus == true){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked= {themeMode=="dark"} // themeMode=="dark" is a true/false checker i.e initialy themeMode is "light" so, "light"=="dark" gives false hence checked becomes false & hence, in the onChangeBtn function darkModeStatus becomes false and so, the ' lightTheme() ' function runs 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-[14px] font-semibold text-gray-900 dark:text-white">Toggle Theme</span>
        </label>
    );
}

