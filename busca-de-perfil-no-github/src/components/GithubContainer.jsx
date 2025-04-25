import { useState } from 'react'
import GitHubResponse from "./GitHubResponse";
import InputBuscar from "./inputBuscar";

export default function GithubContainer() {
    const [profileData, setProfileData] = useState(null);
    const [seachPerformed, setSeachPerformed] = useState(false);

    const handleProfileData = (data) => {
        setSeachPerformed(true);

        if (data) {
            setProfileData(data);
        } else {
            setProfileData(null);
        }
    }

    return (
        <div className="relative z-10 w-full max-w-[1156px] min-h-[537px] flex flex-col items-center justify-start bg-black gap-6 px-4 py-6">
            <div className="flex justify-center items-center gap-2 md:gap-4 mt-4 flex-wrap">
                <img src='./src/assets/img/logo.png' alt="GitHub Logo" className='w-[40px] h-[40px] md:w-[58px] md:h-[58px] rounded-t-lg' />
                <span className='text-white text-[40px] md:text-[60px] font-nunito'>Perfil</span>
                <img src='./src/assets/img/image 2.png' alt="GitHub" className='w-[120px] h-[35px] md:w-[160px] md:h-[45px] rounded-t-lg' />
            </div>
            <InputBuscar onProfileData={handleProfileData} />

            <GitHubResponse profileData={profileData} seachPerformed={seachPerformed} />
        </div>
    )
}
