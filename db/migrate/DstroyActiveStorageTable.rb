class DestroyActiveStorageTables < ActiveRecord::Migration
  drop_table :active_storage_blobs
  drop_table :active_storage_attachments
end
