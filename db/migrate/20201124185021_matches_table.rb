class MatchesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.references :user 
      t.references :matched_user 
      t.timestamps
    end
  end
end
