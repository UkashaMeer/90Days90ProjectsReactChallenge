import { useState } from "react"

export const FormSubmission = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('male');
    const [subject, setSubject] = useState({
        science: true,
        maths: false,
        social: false,
    });
    const [resume, setResume] = useState('');
    const [url, setUrl] = useState('');
    const [option, setOption] = useState('1');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const setSubjectFunc = (sub) => {
        setSubject((prev) => ({
            ...prev,
            [sub]: !prev[sub]
        }))
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
    }
    const ResetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setGender("male");
        setSubject({science: false, maths: false, social: false});
        setResume("");
        setUrl("");
        setOption("1");
        setMessage("");
        setIsSubmitted(false)
    }
    return(
        <main className="bg-gray-300 w-full min-h-[100vh] h-full flex items-center justify-center py-4 px-4">
            <section className="bg-white rounded-md shadow-sm max-w-[400px] w-full flex flex-col p-4">
                <h2 className="text-center text-3xl font-medium mb-2">Submission Form</h2>
                    <label>First Name</label>
                    <input required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}  placeholder="Enter First Name" className="border border-gray-400 border-solid py-1 px-2 rounded-sm" />
                    <label className="mt-2">Last Name</label>
                    <input required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" className="border border-gray-400 border-solid py-1 px-2 rounded-sm" />
                    <label className="mt-2">Email</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="border border-gray-400 border-solid py-1 px-2 rounded-sm" />
                    <label className="mt-2">Phone</label>
                    <input required type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" className="border border-gray-400 border-solid py-1 px-2 rounded-sm" />
                    <div className="mt-2">
                        <span>Gender</span>
                        <div className="flex items-center gap-2">
                            <input required type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} name="gender" id="male" />
                            <label htmlFor="male">Male</label>
                            <input required type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} name="gender" id="female" />
                            <label htmlFor="female">Female</label>
                            <input required type="radio" value="other" checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} name="gender" id="other" />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="mt-2">
                        <span>Subjects</span>
                        <div className="flex items-center gap-2">
                            <input required  type="checkbox" value="science" checked={subject.science === true} onChange={() => setSubjectFunc('science')} name="subject" id="science" />
                            <label htmlFor="science">Science</label>
                            <input required  type="checkbox" value="maths" checked={subject.maths === true} onChange={() => setSubjectFunc('maths')} name="subject" id="maths" />
                            <label htmlFor="maths">Maths</label>
                            <input required  type="checkbox" value="social" checked={subject.social === true} onChange={() => setSubjectFunc('social')} name="subject" id="social" />
                            <label htmlFor="social">Social Study</label>
                        </div>
                    </div>
                    <label htmlFor="file" className="mt-2">Upload Resume</label>
                    <input required type="file" id="file" name="file" value={resume} onChange={(e) => setResume(e.target.value)} className="border border-gray-400 border-solid rounded-sm p-2" />
                    <label htmlFor="url" className="mt-2">Enter Url</label>
                    <input required type="url" id="url" name="url" value={url} onChange={(e) => setUrl(e.target.value)} className="border border-gray-400 border-solid rounded-sm p-2" />
                    <label htmlFor="select" className="mt-2">Select Options</label>
                    <select name="Select Options" id="select" value={option} onChange={(e) => setOption(e.target.value)} className="border border-gray-400 border-solid rounded-sm p-2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label htmlFor="about" className="mt-2">Message</label>
                    <textarea name="about" id="about" className="border border-gray-400 border-solid rounded-sm p-2" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <div className="mt-2 flex items-center justify-between gap-2">
                        <button className="bg-black text-white p-3 w-full rounded-md cursor-pointer" onClick={ResetForm}>Reset</button>
                        <button className="bg-black text-white p-3 w-full rounded-md cursor-pointer" onClick={SubmitForm} type="submit">Submit</button>
                    </div>
                    {
                        isSubmitted &&
                        <>
                            <h2 className="text-xl font-medium mt-4">Results</h2>
                            <span>First Name: {firstName}</span>
                            <span>last Name: {lastName}</span>
                            <span>Email: {email}</span>
                            <span>Phone: {phone}</span>
                            <span>Gender: {gender}</span>
                            <span>Subject: {Object.keys(subject).filter((key) => subject[key]).join(', ')}</span>
                            <span>Resume: {resume}</span>
                            <span>Option: {option}</span>
                            <span>Url: {url}</span>
                            <span>Message: {message}</span>
                        </>
                    }
            </section>
        </main>
    )
}