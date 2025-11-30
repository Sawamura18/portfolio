import { useState } from "react"
import { Search, Settings, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "./theme-provider"
import { Card } from "@/components/ui/card"

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("Utkarsh Singh")
  const [activeSection, setActiveSection] = useState("all")
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const { theme, setTheme } = useTheme()

  const sections = [
    { id: "all", label: "All" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ]

  const results = {
    all: [
      {
        title: "Utkarsh Singh - Full Stack Developer",
        url: "utkarsh.dev/about",
        description: "Click on the link or switch through tabs to know about me.",
        type: "about"
      },
      {
        title: "My experience",
        url: "utkarsh.dev/experience",
        description: "Click on the link to know about my educational and work history.",
        type: "experience"
      },
      {
        title: "My Projects",
        url: "utkarsh.dev/projects",
        description: "Some of the projects I have made.",
        type: "projects"
      },
      {
        title: "Contact me",
        url: "utkarsh.dev/contact",
        description: "Let's build something together!",
        type: "contact"
      }
    ],
    about: [
      {
        title: "About me",
        url: "utkarsh.dev/about-me",
        description: "I am a final-year B.Tech student at IIT BHU with a strong foundation in software engineering and a problem-solving mindset shaped by full-stack development projects. I enjoy breaking ambiguous problems into structured, actionable steps and driving them end to end, from understanding the user need to delivering a working solution. My experiences have strengthened my leadership, teamwork, and communication skills, enabling me to collaborate effectively across diverse groups and guide projects to completion. I’m motivated by building high-impact, user-centric products and I’m eager to take on complex challenges where analytical thinking, ownership, and clear communication truly matter.",
        type: "about"
      },
      {
        title: "Skills",
        url: "utkarsh.dev/skills",
        description: "My skills include:",
        bullets: [
          "Frontend: React, TypeScript, CSS, Tailwind CSS",
          "Backend: Node.js, Python, Express.JS ",
          "Database: MongoDB, SQL(basic)",
          "Tools: Git, Github, Excel"
        ],
        type: "about"
      },
      {
        title: "hobbies",
        url: "utkarsh.dev/hobbies",
        bullets: [
          "Baseball analytics: I enjoy exploring Statcast data to study player performance and uncover patterns",
          "Cricket: I am a spin bowling allrounder, played in inter-hostel tournaments",
          "Basketball: Recreational",
          "Chess: Recreational. I enjoy playing bullet and blitz formats"
          "Sci-Fi & Fantasy: I enjoy reading stories, novels and watching movies of sci-fi or fantasy genre"
        ],
        type: "about"
      }
    ],
    experience: [
      {
        title: "NodeJS Intern - Celebal Technologies",
        url: "utkarsh.dev/experience/internship/May'25-July'25",
        description: "During my internship, I built a blog website using the MERN stack, implementing authentication, database management, and CRUD operations.",
        type: "experience"
      },
      {
        title: "Student - IIT(BHU)-Varanasi",
        url: "utkarsh.dev/experience/education/Sep'22-May'26",
        description: "I am a senior in department of civil engineering at IIT(BHU)-Varanasi.",
        type: "experience"
      }
    ],
    projects: [
      {
        title: "Traffic Visualizer",
        url: "./github/utkarsh/traffic_visualizer",
        externalUrl: "https://github.com/Sawamura18/traffic_visualizer",
        description: "An interactive dashboard that analyzes microscopic vehicle trajectory data to generate space-time heatmaps of speed, flow, and density. It helps identify bottlenecks, visualize congestion propagation, and support data-driven traffic insights.",
        bullets: [
          "Status: Completed",
          "Tech: Python, Flask, Plotly, Pandas, NumPy"
        ],
        type: "projects",
        external: true
      },
      {
        title: "Jobtracker",
        url: "./github/utkarsh/statbook",
        externalUrl: "https://github.com/Sawamura18/jobtracker",
        description: "A user-focused tracker where applicants record every job they apply to and update its current stage, simplifying organization across platforms. It provides a clear overview of progress and ensures no application falls through the cracks.",
        bullets: [
          "Status: Completed",
          "Tech: React, Express.js, Node.js, MongoDB Atlas, REST API, JWT-Authentication, CSS"
        ],
        type: "projects",
        external: true
      },
      {
        title: "Portfolio",
        url: "./github/utkarsh/portfolio",
        externalUrl: "https://github.com/Sawamura18/portfolio",
        description: "A fully responsive personal portfolio website showcasing my projects, experience, and contact information.",
        bullets: [
          "Status: Completed",
          "Tech: React, TypeScript, Tailwind CSS, Shadcn UI, Radix UI"
        ],
        type: "projects",
        external: true
      },
      {
        title: "Statbook",
        url: "./github/utkarsh/statbook",
        externalUrl: "https://github.com/Sawamura18/statbook",
        description: "A web app that fetches real-time NBA data from a third-party API, displaying teams, players, and stats in an interactive dashboard.",
        bullets: [
          "Status: Working (planning to switch from API to web-scraping due to limitations)",
          "Tech: React, Express.js, Node.js, MongoDB, REST API, Axios, CSS"
        ],
        type: "projects",
        external: true
      }
    ],
    contact: [
      {
        title: "Sawamura18",
        url: "utkarsh.dev/contact/external/github",
        externalUrl: "https://github.com/Sawamura18",
        description: "Click the link to contact me on Github for collaboration.",
        type: "contact",
        external: true
      },
      {
        title: "Utkarsh Singh | LinkedIn",
        url: "utkarsh.dev/contact/external/linkedin",
        externalUrl: "https://www.linkedin.com/in/utkarsh-singh-a8a7a7258/",
        description: "Connect on LinkedIn through the link.",
        type: "contact",
        external: true
      },
      {
        title: "Email Me",
        url: "utkarsh.dev/contact/external/email",
        externalUrl: "mailto:utkarsh.excalibur@gamil.com?subject=Collaboration&body=Hi Utkarsh,",
        description: "Click to send me an email directly or email me at [utkarsh.excalibur@gmail.com]",
        type: "contact",
        external: true
      }

    ]
  }

  const currentResults = activeSection === "all" ? results.all : results[activeSection as keyof typeof results] || []
  const currentSection = sections.find(s => s.id === activeSection)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-nav-background border-b border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="text-2xl font-light text-foreground">
                Port<span className="text-link">folio</span>
              </div>

              {/* Search Box */}
              <div className="flex items-center bg-search-input border border-search-input-border rounded-full px-4 py-2 w-96 focus-within:border-search-input-focus">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent px-2 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Settings */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="text-nav-foreground hover:bg-nav-hover"
              >
                <Settings className="h-5 w-5" />
              </Button>

              {showThemeMenu && (
                <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg p-2 w-32">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setTheme("light"); setShowThemeMenu(false) }}
                    className="w-full justify-start text-left"
                  >
                    Light
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setTheme("dark"); setShowThemeMenu(false) }}
                    className="w-full justify-start text-left"
                  >
                    Dark
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setTheme("system"); setShowThemeMenu(false) }}
                    className="w-full justify-start text-left"
                  >
                    System
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Tabs */}
        <nav className="border-b border-border">
          <div className="flex gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`py-3 px-1 border-b-2 transition-colors ${activeSection === section.id
                  ? "border-nav-active text-nav-active font-medium"
                  : "border-transparent text-nav-foreground hover:text-foreground"
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>


        {/* Results */}
        <div className="pb-8 space-y-6">
          {currentResults.map((result, index) => (
            <Card
              key={index}
              className="p-0 border-0 shadow-none hover:bg-card-hover transition-colors"
            >
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 bg-muted rounded-sm flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{result.url}</span>
                </div>

                {result.external ? (
                  <a
                    href={result.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-link hover:text-link-hover mb-1 block"
                  >
                    {result.title}
                  </a>
                ) : (
                  <h3
                    className="text-xl text-link hover:text-link-hover mb-1 cursor-pointer"
                    onClick={() => setActiveSection(result.type)}
                  >
                    {result.title}
                  </h3>
                )}

                {result.description && (
                  <p className="whitespace-pre-line text-foreground leading-6 mb-2">
                    {result.description}
                  </p>
                )}

                {Array.isArray(result.bullets) && result.bullets.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-foreground leading-6">
                    {result.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResults
