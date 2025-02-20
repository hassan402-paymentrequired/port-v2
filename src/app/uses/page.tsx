import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, and other things I recommend."
      intro=" Here’s a big list of all of my favorite stuff. You migth also find it interesting"
    >
      <div className="space-y-20">
  
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Visual Studio Code is still the best text editor ever
            made. Trust me you will like it
          </Tool>
          <Tool title="Wave">
            I highly recommend you to check that out it has almost everything you want want to use as a developer trust me. It a great terminal for windows.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            the stress of having to use the native database client like workbench. writing that junky sql queries is a nightmare. developers will relate 🥹
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I don't actually have the one i use though but i will recommend mobbin, dribble and the likes sha
          </Tool>
          <Tool title="Tailwind and Shadcn">
            Great Ui labrary I don’t know how anyone designs UIs without it (some are haters). It’s like having a
            superpower.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Spotify">
            For nice Gbebu music.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Relax">
          <Tool title="The Greate FIFA">
            Every evening at 6 PM, you’ll catch me battling it out in FIFA! If I’m not playing FIFA, I’m probably ranking up in another game — just trying to keep the fun alive! 🎮 #man::mustPlayGame
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
