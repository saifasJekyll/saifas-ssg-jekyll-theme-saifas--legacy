# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-saifas"
  spec.version       = "0.1.0"
  spec.authors       = ["SAIFAS"]
  spec.email         = ["info@saifas.org"]

  spec.summary       = "This is Jekyll Theme Saifas"
  spec.homepage      = "https://github.com/SAIFAS/saifas-theme-on-jekyll"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.3.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
