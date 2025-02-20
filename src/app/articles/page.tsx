import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default async function ArticlesIndex() {
  let articles: any = []

  return (
    <SimpleLayout
      title="Join me as I explore the fundamentals of coding, system design, data structures, algorithms, and share insights gathered on my programming journey. and i promise you gonna enjoy it 😍"
      intro="All of my long-form thoughts on programming and more."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length ? (
            articles.map((article: any) => (
              <Article key={article.slug} article={article} />
            ))
          ) : (
            <div className=" flex w-full items-center justify-center ">
              <h1 className="text-black text-center text-3xl font-bold select-none md:text-3xl lg:text-[5rem] z-10">
               Still Cooking
              </h1>
            </div>
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
