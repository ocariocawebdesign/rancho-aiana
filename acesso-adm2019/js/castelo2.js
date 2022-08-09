JScriptCodeDom.CodeParseException: Unexcepted Token : None , Requires BlockEnd ,  at END  ---> System.Exception: Unexcepted Token : None , Requires BlockEnd
   at JScriptCodeDom.CodeParser.ReadAndCheckToken(CodeTokenType equalto)
   at JScriptCodeDom.CodeParser.ParseToBlock(CodeBlock block)
   at JScriptCodeDom.CodeParser.ParseIfStatement()
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)