import {ImgHTMLAttributes} from 'react'
import styleModule from './Banner.module.scss'

export type BannerProps = {
  alt: string;
  source: string;
} & ImgHTMLAttributes<HTMLImageElement>

export const Banner = ({alt, source }: BannerProps) => {
  return (
    <>
      <img className={styleModule['Banner']} src={source} alt={alt} />
    </>
  );
};