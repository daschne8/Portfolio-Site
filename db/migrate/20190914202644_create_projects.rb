class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :github_url
      t.string :blog_url
      t.string :title
      t.string :description
      t.string :youtube_id
      t.string :nav_title

      t.timestamps
    end
  end
end
