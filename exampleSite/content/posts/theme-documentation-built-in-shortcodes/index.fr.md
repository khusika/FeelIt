---
weight: 3
title: "Thème Documentation - Built-in Shortcodes"
date: 2020-03-04T16:29:59+08:00
lastmod: 2020-03-04T16:29:59+08:00
draft: false
author: "FeelIt"
authorLink: "https://feelit.khusika.dev"
description: "Hugo fournit plusieurs shortcodes intégrés pour la commodité de l'auteur et pour garder votre contenu de démarque propre."
resources:
- name: "featured-image"
  src: "featured-image.webp"
- name: "featured-image-preview"
  src: "featured-image-preview.webp"

tags: ["shortcodes"]
categories: ["documentation"]

lightgallery: true
---

**Hugo** fournit plusieurs shortcodes intégrés pour la commodité de l'auteur et pour garder votre contenu de démarque propre.

<!--more-->

{{< admonition warning >}}
Sorry, this article has not been completely translated into **French**.
Welcome to take the time to propose a translation by [:(fas fa-code-branch fa-fw): making a PR](https://github.com/dillonzq/LoveIt/pulls) to the theme!
{{< /admonition >}}

Hugo uses Markdown for its simple content format. However, there are a lot of things that Markdown doesn’t support well. You could use pure HTML to expand possibilities.

But this happens to be a bad idea. Everyone uses Markdown because it’s pure and simple to read even non-rendered. You should avoid HTML to keep it as simple as possible.

To avoid this limitations, Hugo created [shortcodes](https://gohugo.io/extras/shortcodes/).
A shortcode is a simple snippet that can generate reasonable HTML code and conforms to Markdown's design philosophy.

Hugo ships with a set of predefined shortcodes that represent very common usage. These shortcodes are provided for author convenience and to keep your markdown content clean.

## 1 figure {#figure}

[Documentation of `figure`](https://gohugo.io/content-management/shortcodes#figure)

Example `figure` input:

```markdown
{{</* figure src="/images/lighthouse.jpg" alt="/images/lighthouse.jpg" title="Lighthouse (figure)" */>}}
```

The rendered output looks like this:

{{< figure src="/images/lighthouse.jpg" alt="/images/lighthouse.jpg" title="Lighthouse (figure)" >}}

The HTML looks like this:

```html
<figure>
    <img src="/images/lighthouse.jpg" alt="/images/lighthouse.jpg" />
    <figcaption>
        <h4>Lighthouse (figure)</h4>
    </figcaption>
</figure>
```

## 2 gist

[Documentation of `gist`](https://gohugo.io/content-management/shortcodes#gist)

Example `gist` input:

```markdown
{{</* gist spf13 7896402 */>}}
```

The rendered output looks like this:

{{< gist spf13 7896402 >}}

The HTML looks like this:

```html
<script type="application/javascript" src="https://gist.github.com/spf13/7896402.js"></script>
```

## 3 highlight

[Documentation of `highlight`](https://gohugo.io/content-management/shortcodes#highlight)

Example `highlight` input:

```markdown
{{</* highlight html */>}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{</* /highlight */>}}
```

The rendered output looks like this:

{{< highlight html >}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{< /highlight >}}

## 4 instagram

{{< version 1.0.0 changed >}}

At the moment, Hugo using deprecated [oEmbed-legacy](https://developers.facebook.com/docs/instagram/oembed-legacy) linked API endpoint. Those deprecated API causes an error when Hugo retrieving the data. The newest API has been included in the [extended shortcode](https://feelit.khusika.dev/theme-documentation-extended-shortcodes/#122-oembed-instagram).

## 5 param

[Documentation of `param`](https://gohugo.io/content-management/shortcodes#param)

Example `param` input:

```markdown
{{</* param description */>}}
```

The rendered output looks like this:

{{< param description >}}

## 6 ref and relref {#ref-and-relref}

[Documentation of `ref` and `relref`](https://gohugo.io/content-management/shortcodes#ref-and-relref)

## 7 tweet

{{< version 1.0.1 changed >}}

This method was moved with the newest API in the [extended shortcode documentation](https://feelit.khusika.dev/theme-documentation-extended-shortcodes/#123-oembed-twitter).

## 8 vimeo

[Documentation of `vimeo`](https://gohugo.io/content-management/shortcodes#vimeo)

Example `vimeo` input:

```markdown
{{</* vimeo 146022717 */>}}
```

The rendered output looks like this:

{{< vimeo 146022717 >}}

## 9 youtube

[Documentation of `youtube`](https://gohugo.io/content-management/shortcodes#youtube)

Example `youtube` input:

```markdown
{{</* youtube w7Ft2ymGmfc */>}}
```

The rendered output looks like this:

{{< youtube w7Ft2ymGmfc >}}
