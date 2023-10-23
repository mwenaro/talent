import { ReactNode } from 'react';
import { Icon, Typography } from '../../atoms';

interface MissionProps {
  title: string;
  icon?: ReactNode | string;
  description: string;
  className? : string
}

const Mission: React.FC<MissionProps> = ({ title, icon, description, className }) => {
  return (
    <div className={`rounded-2xl p-2 bg-white   w-4/5 block mt-10 mx-auto relative shadow-lg ${className}`}>
      <div className="text-skin-accent    flex justify-center font-bold items-center ">
        <Typography variant="h3"className='w-full text-center' >{title}</Typography>
        {/* {typeof icon == 'string' ? <Icon variant={icon as any} /> : icon} */}
      </div>

      <Typography variant="p" className='w-full text-justify'>{description}</Typography>
    </div>
  );
};

export default Mission;
