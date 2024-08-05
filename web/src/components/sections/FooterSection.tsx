import { Link, MusicNotes, Shapes } from '@phosphor-icons/react/dist/ssr';
import { getImage } from 'astro:assets';

import toyboxBg from '@/assets/images/footer-toybox-bg.jpg';
import DotGrid from '@/components/DotGrid';
import SocialLinks from '@/components/SocialLinks';
import t from '@/utils/i18n';

const optimizedToyboxBg = await getImage({ src: toyboxBg });

export default function FooterSection() {
  return (
    <footer className="relative z-10 -mt-8 bg-black px-4 pb-8 pt-16 text-gray-100 lg:-mt-16 lg:px-16 lg:pb-16 lg:pt-32">
      <div
        className="relative isolate grid h-96 place-items-center rounded-2xl bg-cover bg-center lg:h-[40vw] lg:rounded-4xl"
        style={{ backgroundImage: `url(${optimizedToyboxBg.src})` }}
      >
        <div className="text-center text-3xl text-gray-100/60 lg:text-4xl 2xl:text-6xl">
          <span className="block translate-x-[-10%]">
            {t('footer.slogan.word1') + ' '}
            <span className="font-serif italic text-gray-100">
              {t('footer.slogan.word2') + ' '}
            </span>
            <Link size={32} className="inline text-gray-100 2xl:hidden" />
            <Link size={64} className="hidden text-gray-100 2xl:inline" />{' '}
          </span>
          <span className="block translate-x-[25%]">
            {t('footer.slogan.word3') + ' '}
            <span className="font-serif italic text-gray-100">
              {t('footer.slogan.word4') + ' '}
            </span>
            <Shapes size={32} className="inline text-gray-100 2xl:hidden" />
            <Shapes
              size={64}
              className="hidden text-gray-100 2xl:inline"
            />{' '}
          </span>
          <span className="block">
            {t('footer.slogan.word5') + ' '}
            <span className="font-serif italic text-gray-100">
              {t('footer.slogan.word6') + ' '}
            </span>
            <MusicNotes size={32} className="inline text-gray-100 2xl:hidden" />
            <MusicNotes size={64} className="hidden text-gray-100 2xl:inline" />
          </span>
        </div>
        <DotGrid />
      </div>
      <div className="mt-8 flex flex-col gap-8 lg:mt-16 lg:flex-row">
        <div className="flex-1">
          <p className="text-2xl lg:text-4xl">{t('common.fullName')}</p>
          <p className="mt-6 max-w-prose text-balance">
            {t('footer.fineprint.part1') + ' '}
            <a
              href="https://m-b.me/website-figma"
              target="_blank"
              className="text-blueberry-300 underline underline-offset-1 transition-all hover:text-gray-100 hover:underline-offset-4"
            >
              {t('footer.fineprint.part2')}
            </a>
            {t('footer.fineprint.part3')}
            <a
              href="https://m-b.me/website-repo"
              target="_blank"
              className="text-blueberry-300 underline underline-offset-1 transition-all hover:text-gray-100 hover:underline-offset-4"
            >
              {t('footer.fineprint.part4')}
            </a>
            {t('footer.fineprint.part5')}
          </p>
        </div>
        <SocialLinks forceDark />
      </div>
    </footer>
  );
}
