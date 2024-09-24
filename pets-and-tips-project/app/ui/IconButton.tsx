type ButtonProps = {
  icon: React.ReactNode;
  isDownloadLink?: boolean;
  downloadFileName?: string;
  href?: string;
};

export const IconButton = ({
  icon,
  isDownloadLink = false,
  downloadFileName,
  href,
}: ButtonProps) => {
  const commonClasses =
    "cursor-pointer rounded-[100%] bg-green-200 shadow-lg text-purple-800 w-[50px] h-[50px] flex items-center justify-center";

  if (isDownloadLink && href && downloadFileName) {
    return (
      <a
        href={href}
        download={downloadFileName}
        className={commonClasses + "text-[26px]"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  }

  return <button className={commonClasses + "text-[20px]"}>{icon}</button>;
};
