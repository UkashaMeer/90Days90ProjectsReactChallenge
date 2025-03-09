import { useState } from "react"
import validator from 'validator'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export const PasswordValidator = () => {
    const [passwordStrength, setPasswordStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const PasswordValidatorFunc = (value) => {
        if(validator.isStrongPassword(value, {
            minLength: 8, minNumbers: 1,
            minSymbols: 1, minUppercase: 1,
            minLowercase: 1
        })){
            setPasswordStrength('Strong')
        }else {
            setPasswordStrength('Weak')
        }
    }

    return (
        <main className="flex h-[100vh] items-center justify-center w-full bg-gray-300">
            <div className="flex flex-col w-[400px] bg-white p-10 gap-2">
                <div className="flex items-center border border-gray-400 border-solid p-2">
                    <input type={showPassword ? 'text': 'password'} className="w-full outline-none border-none" placeholder="Enter Password" onChange={(e) => PasswordValidatorFunc(e.target.value)} />
                    <button onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                </div>
                <p>Your Password Is <span className={passwordStrength === 'Strong' ? 'text-green-800' : 'text-red-500'}>{passwordStrength}</span></p>
            </div>
        </main>
    )
}