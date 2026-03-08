import { Search, Menu, ChevronDown, X } from "lucide-react";
import Logo from "/neurologic_solutions.horizontal.color_.black_.png";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );

  const navText = "text-black";

  const navBg = scrolled
    ? "bg-white shadow-md shadow-black/10"
    : "bg-white";

  const panelBg = scrolled
    ? "bg-white"
    : "bg-white";

  const panelText = "text-black";
  const panelChrome = "shadow-xl ring-1 ring-black/10";

  const dropdownWrapClass = `
    absolute left-1/2 top-full mt-0 w-[950px] -translate-x-1/2
    opacity-0 pointer-events-none translate-y-2
    group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
    transition-all duration-200 z-50
  `;

  const dropdownPad = "px-3.5 py-3";

  const grid3x1 = "mt-2 grid grid-cols-3 gap-5 place-items-stretch text-center";
  const grid2x1 = "mt-2 grid grid-cols-2 gap-5 place-items-stretch text-center";

  const cardClass =
    "w-full rounded-lg px-3.5 py-3 hover:bg-black/5 transition-colors";

  const navItemClass =
    "text-[11px] tracking-[0.22em] uppercase opacity-80 inline-flex items-center gap-1";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg} ${navText}`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center">
            <img src={Logo} alt="Neurologic Solutions" className="h-14 w-auto" />
          </Link>

          <div className="ml-auto flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              {/* Products */}
              <div className="relative group">
                <Link to="/products" className={navItemClass}>
                  Products
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid2x1}>
                        <Link to="/episcalp" className={cardClass}>
                          <div className="text-sm font-light">EpiScalp</div>
                          <div className="mt-1 text-xs opacity-70">
                            Rapid EEG-Based Epilepsy Risk Assessment
                          </div>
                        </Link>

                        <Link to="/eztrack" className={cardClass}>
                          <div className="text-sm font-light">EZTrack</div>
                          <div className="mt-1 text-xs opacity-70">
                            Simplified EEG Fragility for Surgical Planning
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical */}
              <div className="relative group">
                <Link to="/clinical" className={navItemClass}>
                  Clinical
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid3x1}>
                        <Link to="/clinical-evidence" className={cardClass}>
                          <div className="text-sm font-light">
                            Clinical evidence
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Outcomes and performance results
                          </div>
                        </Link>

                        <Link to="/publications" className={cardClass}>
                          <div className="text-sm font-light">
                            Publications
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Papers, posters, and abstracts
                          </div>
                        </Link>

                        <Link to="/use-cases" className={cardClass}>
                          <div className="text-sm font-light">Use cases</div>
                          <div className="mt-1 text-xs opacity-70">
                            Where it helps most clinically
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="relative group">
                <Link to="/company" className={navItemClass}>
                  Company
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-3" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid2x1}>
                        <Link to="/about-us" className={cardClass}>
                          <div className="text-sm font-light">About us</div>
                          <div className="mt-1 text-xs opacity-70">
                            Mission, vision, and story
                          </div>
                        </Link>

                        <Link to="/team" className={cardClass}>
                          <div className="text-sm font-light">Team</div>
                          <div className="mt-1 text-xs opacity-70">
                            Leadership and contributors
                          </div>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="relative group">
                <Link to="/resources" className={navItemClass}>
                  Resources
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                <div className={dropdownWrapClass}>
                  <div className="h-2" />
                  <div
                    className={`rounded-xl ${panelBg} ${panelText} ${panelChrome}`}
                  >
                    <div className={dropdownPad}>
                      <div className={grid2x1}>
                        <Link to="/blog-news" className={cardClass}>
                          <div className="text-sm font-light">
                            Blog / News
                          </div>
                          <div className="mt-1 text-xs opacity-70">
                            Updates and announcements
                          </div>
                        </Link>

                        <Link to="/support" className={cardClass}>
                          <div className="text-sm font-light">Support</div>
                          <div className="mt-1 text-xs opacity-70">
                            Help and getting started
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request demo */}
              <Link
                to="/Contact-Us"
                className={`${navItemClass} rounded-full px-3 py-1.5 border border-black/20 hover:bg-black/5 bg-yellow-400`}
              >
                Contact Us
              </Link>
            </div>

            {/* Search */}
            <div className="relative group">
              <div className="flex items-center">
                <Search className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div
                  className="
                    overflow-hidden w-0 opacity-0 ml-0
                    group-hover:w-56 group-hover:opacity-100 group-hover:ml-3
                    focus-within:w-56 focus-within:opacity-100 focus-within:ml-3
                    transition-all duration-300
                  "
                >
                  <input
                    type="text"
                    placeholder="Search Neurologic…"
                    className="w-full rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-light outline-none focus:border-black/40"
                  />
                </div>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 mt-2">
            <div className="py-4 space-y-1">
              {/* Products */}
              <div>
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "products" ? null : "products"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-black/5 rounded-lg transition-colors"
                >
                  <span className="text-sm font-light">Products</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-70 transition-transform ${
                      expandedMobileMenu === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "products" && (
                  <div className="bg-black/2 pl-4 py-2 space-y-2">
                    <Link
                      to="/episcalp"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>EpiScalp</div>
                      <div className="text-xs opacity-70">
                        Rapid EEG-Based Epilepsy Risk Assessment
                      </div>
                    </Link>
                    <Link
                      to="/eztrack"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>EZTrack</div>
                      <div className="text-xs opacity-70">
                        Simplified EEG Fragility for Surgical Planning
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Clinical */}
              <div>
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "clinical" ? null : "clinical"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-black/5 rounded-lg transition-colors"
                >
                  <span className="text-sm font-light">Clinical</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-70 transition-transform ${
                      expandedMobileMenu === "clinical" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "clinical" && (
                  <div className="bg-black/2 pl-4 py-2 space-y-2">
                    <Link
                      to="/clinical-evidence"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>Clinical Evidence</div>
                      <div className="text-xs opacity-70">
                        Outcomes and performance results
                      </div>
                    </Link>
                    <Link
                      to="/publications"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>Publications</div>
                      <div className="text-xs opacity-70">
                        Papers, posters, and abstracts
                      </div>
                    </Link>
                    <Link
                      to="/use-cases"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>Use Cases</div>
                      <div className="text-xs opacity-70">
                        Where it helps most clinically
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Company */}
              <div>
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "company" ? null : "company"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-black/5 rounded-lg transition-colors"
                >
                  <span className="text-sm font-light">Company</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-70 transition-transform ${
                      expandedMobileMenu === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "company" && (
                  <div className="bg-black/2 pl-4 py-2 space-y-2">
                    <Link
                      to="/about-us"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>About Us</div>
                      <div className="text-xs opacity-70">
                        Mission, vision, and story
                      </div>
                    </Link>
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>Team</div>
                      <div className="text-xs opacity-70">
                        Leadership and contributors
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "resources" ? null : "resources"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-black/5 rounded-lg transition-colors"
                >
                  <span className="text-sm font-light">Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-70 transition-transform ${
                      expandedMobileMenu === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "resources" && (
                  <div className="bg-black/2 pl-4 py-2 space-y-2">
                    <Link
                      to="/blog-news"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>Blog / News</div>
                      <div className="text-xs opacity-70">
                        Updates and announcements
                      </div>
                    </Link>
                    <Link
                      to="/for-investors"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>For Investors</div>
                      <div className="text-xs opacity-70">
                        Investor-relevant information
                      </div>
                    </Link>
                    <Link
                      to="/support"
                      className="block px-4 py-2 text-sm font-light hover:bg-black/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>Support</div>
                      <div className="text-xs opacity-70">
                        Help and getting started
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <div className="pt-2 border-t border-black/10">
                <Link
                  to="/Contact-Us"
                  className="block px-4 py-3 text-sm font-light bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
