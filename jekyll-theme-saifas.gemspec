# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-saifas"
  spec.version       = "0.1.5"
  spec.authors       = ["SAIFAS"]
  spec.email         = ["jekyll@saifas.info"]

  spec.summary       = "Jekyll theme 'SAIFAS'"
  spec.homepage      = "https://github.com/JekyllGO/saifas-ssg-jekyll-theme-saifas-zero"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2.1"

  spec.add_development_dependency "bundler", "~> 2.3.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
