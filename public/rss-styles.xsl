<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/rss/channel">
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title><xsl:value-of select="title"/> · RSS</title>
<style>
  body { background:#eff1ef; color:#1a1d24; font-family: 'IBM Plex Mono', ui-monospace, monospace; max-width: 700px; margin: 3rem auto; padding: 0 1.5rem; line-height:1.6; }
  h1 { font-size:1.3rem; }
  .lede { color:#565b66; margin-bottom:2rem; }
  .note { border:1px solid #d3d6d0; background:#e7e9e5; padding:0.9rem 1.1rem; border-radius:3px; font-size:0.85rem; color:#565b66; margin-bottom:2rem; }
  .entry { border-top:1px solid #d3d6d0; padding:1.2rem 0; }
  .entry a { color:#1f4e8c; text-decoration:none; font-size:1.05rem; }
  .entry a:hover { text-decoration:underline; }
  .date { font-size:0.78rem; color:#8b8f96; }
  .desc { color:#565b66; margin-top:0.4rem; }
</style>
</head>
<body>
  <h1><xsl:value-of select="title"/></h1>
  <p class="lede"><xsl:value-of select="description"/></p>
  <p class="note">This is an RSS feed — meant for feed readers, not for browsing directly. Paste <xsl:value-of select="link"/>rss.xml into an RSS reader (Feedly, Inoreader, etc.) to subscribe.</p>
  <xsl:for-each select="item">
    <div class="entry">
      <div class="date"><xsl:value-of select="pubDate"/></div>
      <a href="{link}"><xsl:value-of select="title"/></a>
      <div class="desc"><xsl:value-of select="description"/></div>
    </div>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
