page = PAGE
page {
  shortcutIcon = {$path.public}/Icons/favicon.ico

  #  headTag = <head>>

  headerData {
    10 = COA
    10 {
      wrap = <title>|</title>

      10 = TEXT
      10.data = page:title // page:subtitle // page:nav_title

      20 = TEXT
      20 {
        data = levelfield: -1, abstract, slide
      }
    }
  }

  meta {
    // !!addRootLineFields in ext_localconf.php
    keywords.data = levelfield: -1, keywords, slide
    description.data = levelfield: -1, description, slide
    viewport = width=device-width, initial-scale=1.0
  }
}
