namespace :chrome do
  task :create do
    puts "Creating package..."
    verbose(false) do
      sh "bundle exec crxmake --pack-extension=./source --extension-output=./package/app.crx"
    end
    puts "\nDone!"
  end
end
