<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
	<HTML>
    <BODY>    
        <H2>Enjoy the table view of weather data</H2>
        <xsl:apply-templates/>
    </BODY>
    </HTML>
  </xsl:template>

  <xsl:template match="weather">
      <table width="100%" border="1" >
        <thead>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Wind Speed</th>
            <th>Solar Radiation</th>
        </tr>
        </thead>
        <tbody>
          <xsl:apply-templates match="record"/>
        </tbody>
      </table>
  </xsl:template>


    <xsl:template match="record">
    <tr>
        <td><xsl:value-of select="date"/></td>
        <td><xsl:value-of select="time"/></td>
        <td><xsl:value-of select="ws"/></td>
        <td><xsl:value-of select="sr"/></td>
    </tr>
  </xsl:template>

  <xsl:template match="text()|@*">    
	<!-- Do nothing -->
  </xsl:template>

</xsl:stylesheet>
