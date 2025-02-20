import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import Photos from '@/components/ui/Photos'
import Newsletter from '@/components/ui/Newsletter'
import Resume from '@/components/ui/Resume'
import SocialLink from '@/components/ui/SocialLink'
import Article from '@/components/ui/Article'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer, Founder, and an &ldquo;Amateur&rdquo; Developer (But Like,
            Not Really).
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hey there! I’m Hassan, a software developer 🤓 based in Lagos,
            Nigeria. I’m the proud founder of{' '}
            <span className="font-bold">Laramic Studio</span>. Quick note:
            Laramic Studio is currently in the &ldquo;cooking up something great&rdquo;
            phase. 🔥 It’s where I turn wild ideas into web solutions—like
            turning coffee into code, but less messy!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      {/* <Photos /> */}

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
