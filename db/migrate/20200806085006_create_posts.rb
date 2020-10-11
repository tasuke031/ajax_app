class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :content
      t.boolean :checked
      t.timestamps
    end
  end
end
