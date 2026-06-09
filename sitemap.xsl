<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Sitemap - Rashid Muneer</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <style type="text/css">
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,sans-serif;color:#333;margin:0;padding:20px 40px}
    h1{font-size:22px;font-weight:600;margin:0 0 4px}
    p.sub{color:#666;font-size:13px;margin:0 0 20px}
    a{color:#1a0dab;text-decoration:none}
    a:hover{text-decoration:underline}
    table{width:100%;border-collapse:collapse;border:1px solid #e0e0e0;font-size:13px}
    th{background:#f5f5f5;text-align:left;padding:10px 12px;font-weight:600;border-bottom:2px solid #ddd;white-space:nowrap}
    td{padding:8px 12px;border-bottom:1px solid #eee}
    tr:hover td{background:#fafafa}
    .count{text-align:center}
    .date{white-space:nowrap}
  </style>
</head>
<body>
  <h1>Page Sitemap</h1>
  <p class="sub">This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
  <table>
    <tr>
      <th>URL</th>
      <th>Images</th>
      <th>Change Frequency</th>
      <th>Priority</th>
      <th>Last Updated</th>
    </tr>
    <xsl:for-each select="sitemap:urlset/sitemap:url">
      <tr>
        <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
        <td class="count"><xsl:value-of select="count(image:image)"/></td>
        <td><xsl:value-of select="concat(translate(substring(sitemap:changefreq,1,1),'abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ'),substring(sitemap:changefreq,2))"/></td>
        <td><xsl:value-of select="sitemap:priority"/></td>
        <td class="date"><xsl:value-of select="sitemap:lastmod"/></td>
      </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
