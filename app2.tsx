import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EyeIcon, EyeOffIcon, LockIcon, FileTextIcon, CheckCircleIcon, PackageOpenIcon } from 'lucide-react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('login')

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginForm onLogin={() => setCurrentPage('my-orders')} />
      case 'free-inquiry':
        return <FreeInquiryForm />
      case 'my-orders':
        return <MyOrders />
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-teal-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => setCurrentPage('my-orders')}>MY ORDERS</Button>
            <Button variant="ghost">REWARDS PROGRAM</Button>
          </div>
          <div className="space-x-4">
            <Button variant="ghost">MY WALLET</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('free-inquiry')}>FREE INQUIRY</Button>
            <Button variant="ghost">NEW ORDER</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        {renderPage()}
      </main>
    </div>
  )
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempted with:', email, password)
    onLogin()
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">Sign in to your account</CardTitle>
              </CardHeader>
              <Tabs defaultValue="returning" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="returning">Returning customer</TabsTrigger>
                  <TabsTrigger value="new">New customer</TabsTrigger>
                </TabsList>
                <TabsContent value="returning">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email or ID</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4 text-gray-500" />
                          ) : (
                            <EyeIcon className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                      Sign in
                    </Button>
                    <div className="text-center">
                      <a href="#" className="text-sm text-teal-500 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="new">
                  <div className="text-center py-4">
                    <p>Create a new account to get started.</p>
                    <Button className="mt-2 bg-teal-500 hover:bg-teal-600">
                      Create Account
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="hidden md:block">
              <h3 className="text-lg font-semibold mb-4">
                Get help with your academic paper right away
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <LockIcon className="h-5 w-5 text-teal-500 mr-2 mt-1" />
                  <span>Confidentiality and security at every step</span>
                </li>
                <li className="flex items-start">
                  <FileTextIcon className="h-5 w-5 text-teal-500 mr-2 mt-1" />
                  <span>Top-quality content for any kind of paper</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-500 mr-2 mt-1" />
                  <span>Authentic writing with every order</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FreeInquiryForm() {
  const [academicLevel, setAcademicLevel] = useState('high-school')
  const [paperType, setPaperType] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [topic, setTopic] = useState("Writer's choice")
  const [instructions, setInstructions] = useState('')
  const [paperFormat, setPaperFormat] = useState('apa')
  const [deadline, setDeadline] = useState('14-days')
  const [pages, setPages] = useState(1)
  const [spacing, setSpacing] = useState('double')
  const [sources, setSources] = useState(0)
  const [slides, setSlides] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { academicLevel, paperType, discipline, topic, instructions, paperFormat, deadline, pages, spacing, sources, slides })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">PLACE A NEW INQUIRY</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Academic level</Label>
            <RadioGroup value={academicLevel} onValueChange={setAcademicLevel} className="flex flex-wrap gap-4 mt-2">
              {['High school', 'Undergrad. (yrs 1-2)', 'Undergrad. (yrs 3-4)', "Master's", 'PhD'].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <RadioGroupItem value={level.toLowerCase().replace(/\s+/g, '-')} id={level} />
                  <Label htmlFor={level}>{level}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paper-type">Type of paper</Label>
            <Select value={paperType} onValueChange={setPaperType}>
              <SelectTrigger id="paper-type">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="essay">Essay</SelectItem>
                <SelectItem value="research-paper">Research Paper</SelectItem>
                <SelectItem value="term-paper">Term Paper</SelectItem>
                <SelectItem value="case-study">Case Study</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="discipline">Discipline</Label>
            <Select value={discipline} onValueChange={setDiscipline}>
              <SelectTrigger id="discipline">
                <SelectValue placeholder="Select or type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="psychology">Psychology</SelectItem>
                <SelectItem value="sociology">Sociology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Paper instructions</Label>
            <Textarea 
              id="instructions" 
              value={instructions} 
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Write anything you feel is important for the writer to consider. An outline, a grading scale, and other documents may be uploaded as additional materials."
            />
          </div>

          <div className="space-y-2">
            <Label>Additional materials</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
              <Button variant="outline" type="button">Browse</Button>
              <span className="ml-2">or Drop files here</span>
            </div>
          </div>

          <div>
            <Label>Paper format</Label>
            <RadioGroup value={paperFormat} onValueChange={setPaperFormat} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
              {['APA', 'MLA', 'Chicago', 'Turabian', 'Not applicable', 'Other'].map((format) => (
                <div key={format} className="flex items-center space-x-2">
                  <RadioGroupItem value={format.toLowerCase().replace(/\s+/g, '-')} id={format} />
                  <Label htmlFor={format}>{format}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label>Deadline</Label>
            <RadioGroup value={deadline} onValueChange={setDeadline} className="flex flex-wrap gap-4 mt-2">
              {['8 hours', '24 hours', '48 hours', '3 days', '5 days', '7 days', '14 days'].map((time) => (
                <div key={time} className="flex items-center space-x-2">
                  <RadioGroupItem value={time.toLowerCase().replace(/\s+/g, '-')} id={time} />
                  <Label htmlFor={time}>{time}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <Label>Pages</Label>
              <div className="flex items-center space-x-2">
                <Button type="button" onClick={() => setPages(Math.max(1, pages - 1))}>-</Button>
                <Input type="number" value={pages} onChange={(e) => setPages(parseInt(e.target.value))} className="w-16 text-center" />
                <Button type="button" onClick={() => setPages(pages + 1)}>+</Button>
              </div>
            </div>
            <div>
              <Label>Spacing</Label>
              <RadioGroup value={spacing} onValueChange={setSpacing} className="flex gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single">Single</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="double" id="double" />
                  <Label htmlFor="double">Double</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <Label>Sources to be cited</Label>
              <div className="flex items-center space-x-2">
                <Button type="button" onClick={() => setSources(Math.max(0, sources - 1))}>-</Button>
                <Input type="number" value={sources} onChange={(e) => setSources(parseInt(e.target.value))} className="w-16 text-center" />
                <Button type="button" onClick={() => setSources(sources + 1)}>+</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>PowerPoint slides</Label>
              <div className="flex items-center space-x-2">
                <Button type="button" onClick={() => setSlides(Math.max(0, slides - 1))}>-</Button>
                <Input type="number" value={slides} onChange={(e) => setSlides(parseInt(e.target.value))} className="w-16 text-center" />
                <Button type="button" onClick={() => setSlides(slides + 1)}>+</Button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Place Free Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function MyOrders() {
  const [activeTab, setActiveTab] = useState('recent')

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-8">
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="recent">RECENT</TabsTrigger>
                <TabsTrigger value="finished">FINISHED</TabsTrigger>
                <TabsTrigger value="canceled">CANCELED</TabsTrigger>
              </TabsList>
              <TabsContent value="recent">
                <div className="text-center py-16">
                  <PackageOpenIcon className="mx-auto h-24 w-24 text-gray-400" />
                  <p className="mt-4 text-xl font-semibold text-gray-600">THERE ARE NO ORDERS YET</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    New Order
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="finished">
                <p className="text-center py-16 text-gray-600">No finished orders.</p>
              </TabsContent>
              <TabsContent value="canceled">
                <p className="text-center py-16 text-gray-600">No canceled orders.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}