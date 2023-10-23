"use client"
import { Button, Icon, Typography } from '@/components';
import { Link as ScrollLink } from 'react-scroll';


interface CourseCardProps {
  icon?: React.ReactNode | string;
  enrollmentLink?: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    icon,
  title,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto text-center shadow-lg bg-slate-100 p-2 rounded-md">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
        {typeof icon == 'string' ? <Icon variant={icon as any} /> : icon}
      </div>
      <Typography variant="h6" className="mb-3 text-xl font-bold leading-5">
        {title}
      </Typography>
      <Typography variant="p" className="mb-3 text-sm text-gray-900">
        {description}
      </Typography>
      
      <ScrollLink
          to={'booking'}
          // to={link.href}
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
        >
          <Button  className='hover:bg-skin-accent'>Book Now</Button>
        </ScrollLink>
     
    </div>
  );
};

export default CourseCard;
