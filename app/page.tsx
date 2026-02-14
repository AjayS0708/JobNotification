import Card from '@/components/Card'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Badge from '@/components/Badge'
import Checkbox from '@/components/Checkbox'
import ProgressIndicator from '@/components/ProgressIndicator'

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-64">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-64">
          <h1 className="font-serif text-heading-xl text-primary mb-16">
            KodNest Premium Build System
          </h1>
          <p className="font-sans text-body-lg text-primary max-w-text">
            A professional design system for serious B2C products. Calm, intentional, and coherent.
          </p>
        </div>

        {/* Component Showcase */}
        <div className="space-y-64">
          <section>
            <h2 className="font-serif text-heading-lg text-primary mb-40">Component Library</h2>
            <div className="space-y-40">
              {/* Colors */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Color Palette</h3>
                <div className="grid grid-cols-4 gap-24">
                  <div>
                    <div className="w-full h-64 bg-accent mb-8"></div>
                    <p className="font-sans text-sm font-medium">Accent</p>
                    <p className="font-mono text-xs text-[#666]">#8B0000</p>
                  </div>
                  <div>
                    <div className="w-full h-64 bg-primary mb-8"></div>
                    <p className="font-sans text-sm font-medium">Primary</p>
                    <p className="font-mono text-xs text-[#666]">#111111</p>
                  </div>
                  <div>
                    <div className="w-full h-64 bg-success mb-8"></div>
                    <p className="font-sans text-sm font-medium">Success</p>
                    <p className="font-mono text-xs text-[#666]">#4A5F4A</p>
                  </div>
                  <div>
                    <div className="w-full h-64 bg-warning mb-8"></div>
                    <p className="font-sans text-sm font-medium">Warning</p>
                    <p className="font-mono text-xs text-[#666]">#8B7355</p>
                  </div>
                </div>
              </Card>

              {/* Buttons */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Buttons</h3>
                <div className="space-y-16">
                  <div className="flex gap-16">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                  </div>
                </div>
              </Card>

              {/* Badges */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Status Badges</h3>
                <div className="flex gap-16">
                  <Badge status="not-started" />
                  <Badge status="in-progress" />
                  <Badge status="shipped" />
                </div>
              </Card>

              {/* Progress Indicator */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Progress Indicator</h3>
                <ProgressIndicator currentStep={2} totalSteps={5} />
              </Card>

              {/* Form Inputs */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Form Elements</h3>
                <div className="space-y-24 max-w-[500px]">
                  <Input label="Text Input" placeholder="Enter text..." fullWidth />
                  <Input label="With Error" error="This field is required" fullWidth />
                  <Textarea label="Textarea" placeholder="Enter longer text..." fullWidth />
                </div>
              </Card>

              {/* Spacing System */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Spacing Scale</h3>
                <div className="space-y-16">
                  <div className="flex items-center gap-16">
                    <div className="w-[8px] h-[8px] bg-accent"></div>
                    <span className="font-mono text-sm">8px</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="w-[16px] h-[16px] bg-accent"></div>
                    <span className="font-mono text-sm">16px</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="w-[24px] h-[24px] bg-accent"></div>
                    <span className="font-mono text-sm">24px</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="w-[40px] h-[40px] bg-accent"></div>
                    <span className="font-mono text-sm">40px</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="w-[64px] h-[64px] bg-accent"></div>
                    <span className="font-mono text-sm">64px</span>
                  </div>
                </div>
              </Card>

              {/* Typography */}
              <Card padding="lg">
                <h3 className="font-serif text-heading-sm text-primary mb-24">Typography</h3>
                <div className="space-y-24">
                  <div>
                    <p className="font-sans text-sm text-[#666] mb-8">Heading XL - Libre Baskerville 64px</p>
                    <h1 className="font-serif text-heading-xl text-primary">Large Headline</h1>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-[#666] mb-8">Heading LG - Libre Baskerville 48px</p>
                    <h2 className="font-serif text-heading-lg text-primary">Medium Headline</h2>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-[#666] mb-8">Body - Inter 16px, line-height 1.6</p>
                    <p className="font-sans text-body-base text-primary max-w-text">
                      Body text uses Inter with generous line spacing. Text blocks are constrained to 720px maximum width for optimal readability.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
