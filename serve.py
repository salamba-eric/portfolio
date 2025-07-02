from livereload import Server

server = Server()

# Watch the file you want to reload
# Watch all relevant files in the portfolio folder
server.watch('portfolio/portfolio.html')
server.watch('portfolio/portfolio_2.html')
server.watch('portfolio/*.js')
server.watch('portfolio/*.css')

# Watch all relevant files in the resume folder
server.watch('resume/resume.html')
server.watch('resume/resume_2.html')
server.watch('resume/*.js')
server.watch('resume/*.css')
server.watch('resume/render.js')
server.watch('resume/resume_data.js')

# Serve current directory and open portfolio.html by default
server.serve(root='.', port=5500, open_url_delay=1)