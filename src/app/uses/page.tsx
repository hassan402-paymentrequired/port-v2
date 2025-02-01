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
      intro=" Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
  
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="Wave">
            Great terminal for windows.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            the stress of having to use the native database client like workbench.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
          <Tool title="Tailwind">
            Great Ui labrary I don’t know how anyone designs UIs without it (some are haters). It’s like having a
            superpower.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Spotify">
            For nice Gbebu music.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
