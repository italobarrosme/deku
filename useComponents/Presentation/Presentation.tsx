export type PresentationProps = {
  source?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

export const Presentation = ({
  source,
  alt,
  title = 'Name Channel',
  subtitle = 'Subtitle Channel'
}: PresentationProps) => {
  return (
    <div className='flex p-4 items-center gap-4'>
      <img className="rounded-full" src={source || 'https://via.placeholder.com/80'} alt={alt} width='80' height='80' />
      <div className="flex flex-col">
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-base text-gray-400'>{subtitle}</p>
      </div>
    </div>
  );
}