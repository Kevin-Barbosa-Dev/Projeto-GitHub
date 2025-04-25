export default function GitHubResponse({ profileData, seachPerformed }) {
    if (!seachPerformed) {
        return null;
    }
    if (!profileData) {
        return (
            <div className="flex justify-center items-center w-full max-w-[710px] p-4 bg-[#d9d9d9] rounded-[10px] gap-4">
                <p className="text-[#ff0000] text-[16px] md:text-[20px] text-center font-[300] leading-[120%] md:leading-[100%] tracking-[0%]">
                    Nenhum perfil foi encontrado com esse nome de usuário.<br /> Tente novamente
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[804px] p-6 bg-[#d9d9d9] rounded-[25px] gap-4">
            <div className="flex justify-center items-center w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full border-2 border-solid border-[#005cff]">
                {profileData.avatar_url && (
                    <img
                        src={profileData.avatar_url}
                        alt={`${profileData.login}'s avatar`}
                        className="w-[140px] h-[140px] md:w-[210px] md:h-[210px] rounded-full object-cover"
                    />
                )}
            </div>
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[438px] mt-4 md:mt-0 gap-4">
                <span className="text-[18px] md:text-[20px] font-bold leading-none tracking-[0%] text-[#005cff] text-center md:text-left">
                    {profileData.name || profileData.login}
                </span>
                <span className="text-[14px] md:text-[15px] font-[300] leading-[120%] md:leading-[100%] tracking-[0%] text-center md:text-left">
                    {profileData.bio || "Este usuário não possui uma bio."}
                </span>
            </div>
        </div>
    )
}
