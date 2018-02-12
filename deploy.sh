#!/usr/bin/env bash
echo \"www.coenkoopmans.nl\" > dist/CNAME
   angular-cli-ghpages --branch master --no-silent \
   --repo="https://GH_TOKEN@github.com/coenkoopmans/coenkoopmans.nl.git" \
   --name="Automatic deployment" --email="noreply@coenkoopmans.nl"